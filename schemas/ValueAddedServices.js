export default {
  name: "value_added_services",
  type: "document",
  title: "Value Added Services",
  fields: [
    {
      name: "service_name",
      type: "string",
      title: "Service Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "service_desc",
      type: "text",
      title: "Service Desc",
      validation: (rule) => rule.required(),
    },
    {
      name: "service_img",
      type: "image",
      title: "Service Image",
      validation: (rule) => rule.required(),
    },
    {
      name: "include_accordions",
      type: "boolean",
      title: "Include Accordions",
      initialValue: false,
      validation: (rule) => rule.required(),
    },
    {
      name: "accordions",
      type: "array",
      title: "Accordions",
      hidden: ({ parent }) => !parent?.include_accordions,
      of: [
        {
          name: "single_accordion",
          type: "document",
          title: "Accordion",
          fields: [
            {
              name: "accordion_title",
              type: "string",
              title: "Accordion Title",
              validation: (rule) => rule.required(),
            },
            {
              name: "accordion_desc",
              type: "text",
              title: "Accordion Description",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
