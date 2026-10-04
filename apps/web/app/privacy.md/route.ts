import { SITE_URL } from "@/lib/config";

export const revalidate = 86400;

export async function GET() {
  const content = `# Privacy Policy — Gyanranjan Priyam

> Privacy Policy for Gyanranjan Priyam's portfolio website (${SITE_URL}) and associated services.
> Effective Date: January 1, 2025 (Last updated: Current)

- Canonical URL: ${SITE_URL}/privacy
- Contact: info@priyam.tech

---

## 1. Information We Collect

### Information You Provide
When you use our contact form or subscribe to our blog, we may collect your name, email address, and any message content you choose to share. This information is provided voluntarily and is used solely to respond to your inquiries.

### Automatically Collected Information
We use analytics services (Ahrefs Analytics) to understand how visitors interact with the website. This may include your anonymized IP address, browser type, device information, pages visited, and time spent on pages. This data helps us improve the user experience.

---

## 2. How We Use Your Information

We use the collected information to:
- Respond to inquiries and messages submitted via contact points.
- Maintain and improve website functionality and user experience.
- Analyze website performance and reader engagement.
- Ensure the security and integrity of our systems.

---

## 3. Cookies & Local Storage

- **Theme Preferences**: We store your theme preference (light/dark mode) in your browser's local storage to provide a consistent experience across visits. This data never leaves your device.
- **Analytics Cookies**: Third-party analytics services may use cookies to collect anonymous usage metrics without identifying individual users.
- **Session Storage**: We use session storage to manage initial page loading animation state, automatically cleared upon tab closure.

---

## 4. Data Sharing & Security

- **Third-Party Services**: We use trusted infrastructure providers including Vercel (hosting) and Ahrefs (analytics). These services adhere to industry security standards.
- **Security**: The entire website is transmitted over secure HTTPS (TLS encryption) to prevent unauthorized interception.

---

## 5. Your Rights & Contact

You have the right to access, correct, or request deletion of any personal data you have shared with us.
To exercise your rights or ask questions, email: info@priyam.tech.
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
