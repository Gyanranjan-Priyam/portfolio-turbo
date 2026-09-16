import { SITE_URL } from "../lib/config";
import projects from "../data/projectsData";
import templates from "../data/templateData";

const INDEXNOW_KEY = "5z94p6kzrxbxk672p6zpfhq1754q6ygu";
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

async function submitIndexNow() {
  const host = new URL(SITE_URL).hostname;

  const urlList: string[] = [
    SITE_URL,
    `${SITE_URL}/projects`,
    `${SITE_URL}/templates`,
    `${SITE_URL}/privacy`,
    ...projects.map((p) => `${SITE_URL}/projects/${p.id}`),
    ...templates.map((t) => `${SITE_URL}/templates/${t.id}`),
  ];

  console.log(`Submitting ${urlList.length} canonical URLs to IndexNow for host: ${host}...`);

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ Successfully submitted ${urlList.length} URLs to IndexNow! (Status: ${res.status})`);
    } else {
      console.error(`⚠️ IndexNow responded with HTTP ${res.status}:`, await res.text());
    }
  } catch (err) {
    console.error("❌ Error submitting to IndexNow:", err);
  }
}

submitIndexNow();
