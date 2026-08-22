import { defineField, defineType } from "sanity";

export default defineType({
  name: "photo",
  title: "Photo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Internal title (not shown on site)",
      type: "string",
      description: "Just for you to identify this photo in the list, e.g. 'Sea bicycle kick'.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text (for accessibility/SEO)",
      type: "string",
      description: "A short description of what's in the photo.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Where does this photo appear?",
      type: "string",
      options: {
        list: [
          { title: "Home Hero (rotating background)", value: "hero" },
          { title: "Home — About teaser", value: "about-teaser" },
          { title: "About page — main portrait", value: "about-portrait" },
          { title: "Recent Work — photo gallery", value: "gallery" },
          { title: "Commercial Brands page", value: "commercial" },
          { title: "Hire — Corporate Events", value: "hire-corporate" },
          { title: "Hire — Product Activations", value: "hire-product" },
          { title: "Hire — Sports Events", value: "hire-sports" },
          { title: "Hire — Weddings & Private Events", value: "hire-weddings" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first. Only matters for categories with multiple photos (like Home Hero or the gallery).",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "title", category: "category", media: "image" },
    prepare({ title, category, media }) {
      return { title, subtitle: category, media };
    },
  },
});
