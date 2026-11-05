export type ApiResponse = {
  status: "success" | "error";
  message: string;
};

export interface MarkdownHeading {
  slug: string;
  text: string;
  depth: number;
}
