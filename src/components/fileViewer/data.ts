const readTemplate = (template: any, data: any = { items: {} }) => {
  for (const [key, value] of Object.entries(template)) {
    data.items[key] = {
      index: key,
      canMove: true,
      isFolder: value !== null,
      children: value !== null ? Object.keys(value as object) : undefined,
      data: key,
      canRename: true,
    };

    if (value !== null) {
      readTemplate(value, data);
    }
  }
  return data;
};

const shortTreeTemplate = {
  root: {
    container: {
      item0: null,
      item1: null,
      item2: null,
      item3: {
        inner0: null,
        inner1: null,
        inner2: null,
        inner3: null,
      },
      item4: null,
      item5: null,
    },
  },
};

const longTreeTemplate = {
  root: {
    public: {},
    pages: {
      'index.tsx': null,
      '_app.tsx': null,
      '_document.tsx': null,
      'about.tsx': null,
    },
    src: {
      api: {
        'index.tsx': null,
      },
      assets: {},
      components: {
        auth: {
          'authRight.tsx': null,
        },
      },
    },
    '.env': null,
    '.gitignore': null,
    'package.json': null,
    'package-lock.json': null,
  },
};

export const longTree = readTemplate(longTreeTemplate);
export const shortTree = readTemplate(shortTreeTemplate);
