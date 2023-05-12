export const suggestedFields: any = {
  Todo: [
    { fieldName: 'Date', fieldType: 'Date' },
    { fieldName: 'Task', fieldType: 'Text' },
    { fieldName: 'Completed', fieldType: 'Boolean' },
  ],
  Password: [
    { fieldName: 'Website', fieldType: 'Url' },
    { fieldName: 'Username', fieldType: 'Text' },
    { fieldName: 'Password', fieldType: 'Password' },
  ],
  Code: [
    { fieldName: 'Title', fieldType: 'Text' },
    { fieldName: 'Code', fieldType: 'Code' },
  ],
  Bookmark: [
    { fieldName: 'Website', fieldType: 'Url' },
    { fieldName: 'Description', fieldType: 'Text' },
  ],
  Image: [
    { fieldName: 'Title', fieldType: 'Text' },
    { fieldName: 'Image', fieldType: 'Url' },
  ],
};

export const categoryTypes = [
  'Todo',
  'Password',
  'Code',
  'Bookmark',
  'Image',
  'Custom',
];

export const dataTypes = [
  'Text',
  'Long Text',
  'Image',
  'Password',
  'Date',
  'Code',
  'Url',
  'Boolean',
];
