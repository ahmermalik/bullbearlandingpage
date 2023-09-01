// typings.d.ts or custom.d.ts
declare namespace NodeJS {
  interface Global {
    require: NodeRequire;
  }
}

declare var require: NodeRequire;

interface NodeRequire {
  context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => any;
}
