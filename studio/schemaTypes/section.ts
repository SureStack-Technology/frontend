import {Rule} from 'sanity'

export default {
  name: 'section',
  type: 'document',
  fields: [
    { name: 'sectionId', type: 'string', title: 'Section ID (e.g., "features")' },
    { name: 'language', type: 'string', title: 'Language',
      options: {
        list: [
            { title: 'English', value: 'en' },
            { title: 'Türkçe', value: 'tr' }
        ]
      },
      validation: (Rule: Rule) => Rule.required()
    },
    { name: 'order', type: 'number', title: 'Display Order' },
    { name: 'title', type: 'string', title: 'Section Title' },
    { name: 'subtitle', type: 'text', title: 'Section Subtitle' },
  ]
}