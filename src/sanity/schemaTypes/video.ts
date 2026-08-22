import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Shown under the video, e.g. '22M View Reel'.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "One short line about the video.",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram Reel/Post URL",
      type: "url",
      description: "Paste the full public Instagram link, e.g. https://www.instagram.com/reel/XXXXXXX/",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "instagramUrl" },
  },
});
