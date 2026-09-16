import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/config";
import projects from "@/data/projectsData";
import templates from "@/data/templateData";

const INDEXNOW_KEY = "5z94p6kzrxbxk672p6zpfhq1754q6ygu";
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const expectedSecret = process.env.INDEXNOW_SECRET;

    // Optional auth check if INDEXNOW_SECRET is configured
    if (expectedSecret && authHeader !== `Bearer ${expectedSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const host = new URL(SITE_URL).hostname;

    // Compile all valid canonical URLs
    const urlList: string[] = [
      SITE_URL,
      `${SITE_URL}/projects`,
      `${SITE_URL}/templates`,
      `${SITE_URL}/privacy`,
      ...projects.map((p) => `${SITE_URL}/projects/${p.id}`),
      ...templates.map((t) => `${SITE_URL}/templates/${t.id}`),
    ];

    const payload = {
      host,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok && response.status !== 200 && response.status !== 202) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: "IndexNow submission failed", status: response.status, details: errorText },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Submitted ${urlList.length} canonical URLs to IndexNow`,
      urlsSubmitted: urlList.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal server error during IndexNow submission", details: error.message },
      { status: 500 }
    );
  }
}
