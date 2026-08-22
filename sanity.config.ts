import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Sbn Freestyler — Content")
          .items([
            S.listItem()
              .title("Photos")
              .child(S.documentTypeList("photo").title("Photos")),
            S.listItem()
              .title("Videos")
              .child(S.documentTypeList("video").title("Videos")),
            S.listItem()
              .title("Testimonials")
              .child(S.documentTypeList("testimonial").title("Testimonials")),
          ]),
    }),
    // Lets you write/test GROQ queries directly in the Studio — dev tool, safe to keep
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
