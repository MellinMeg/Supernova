import { mkdir, writeFile, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Converti __dirname per ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COMPONENTS_DIR = join(__dirname, "../components");

const getComponentTemplate = (name) => `---
import "./${name}.scss";
import type { ${name}Props } from "./${name}.ts";

export interface Props extends ${name}Props {}

const props: Props = Astro.props;
---

<div class="${name}"> 
  <slot />
</div>

<script src="./${name}.client.ts"></script>
`;

const getScssTemplate = (name) => `.${name} {

}
`;

const getTsTemplate = (name) => `
export interface ${name}Props {
  title?: string;
}

const ${name.toLowerCase()}Data: ${name}Props = { title: "${name}" };

console.log("${name}Props", ${name.toLowerCase()}Data);

`;

const getTsClientTemplate = (name) => `
export function setupClient${name}() {
  console.log("${name} component initialized in the browser");
}

setupClient${name}();
`;

const createComponent = async (name) => {
  if (!name) {
    console.error("❌ Errore: Devi specificare il nome del componente!");
    process.exit(1);
  }

  const componentDir = join(COMPONENTS_DIR, name);

  if (existsSync(componentDir)) {
    console.error(`❌ Errore: Il componente "${name}" esiste già!`);
    process.exit(1);
  }

  mkdir(componentDir, { recursive: true }, (err) => {
    if (err) throw err;

    writeFile(join(componentDir, `${name}.astro`), getComponentTemplate(name), () => {});
    writeFile(join(componentDir, `${name}.scss`), getScssTemplate(name), () => {});
    writeFile(join(componentDir, `${name}.ts`), getTsTemplate(name), () => {});
    writeFile(join(componentDir, `${name}.client.ts`), getTsClientTemplate(name), () => {});

    console.log(`✅ Componente "${name}" creato con successo in src/components/${name}`);
  });
};

// Esegui lo script con: `node scripts/createComponent.js NomeComponente`
const componentName = process.argv[2];
createComponent(componentName);
