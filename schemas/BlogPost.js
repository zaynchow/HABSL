export default {
  name: "blog_posts",
  type: "document",
  title: "Blog Posts",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required(),
    },

    {
      name: "desc",
      title: "Description",
      type: "array",
      of: [{ type: "block" }, { type: "break" }],
      validation: (rule) => rule.required(),
    },
  ],
};
