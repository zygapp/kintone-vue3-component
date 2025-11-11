import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// グローバル型定義の内容を読み込む
const globalTypesPath = resolve('src/types/global-components.d.ts');
const indexDtsPath = resolve('dist/index.d.ts');

// ファイルを読み込む
const globalTypes = readFileSync(globalTypesPath, 'utf-8');
let indexDts = readFileSync(indexDtsPath, 'utf-8');

// import文とその関連行を削除（既にdist/index.d.tsに含まれているため）
let inImportBlock = false;
const globalTypesWithoutImports = globalTypes
  .split('\n')
  .filter(line => {
    const trimmed = line.trim();

    // import { で始まる行を検出
    if (trimmed.startsWith('import ')) {
      inImportBlock = true;
      return false;
    }

    // } from で終わる行を検出してimportブロックを終了
    if (inImportBlock && trimmed.includes('} from ')) {
      inImportBlock = false;
      return false;
    }

    // importブロック内の行をスキップ
    if (inImportBlock) {
      return false;
    }

    return true;
  })
  .join('\n')
  .trim();

// 既にグローバル型定義が存在するかチェック
if (indexDts.includes('Global component type definitions for app.use()')) {
  console.log('ℹ Global component types already exist in dist/index.d.ts');
} else {
  // export {} を削除（空のexportは不要）
  indexDts = indexDts.replace(/export\s*\{\s*\}\s*$/m, '').trim();

  // グローバル型定義をindex.d.tsの末尾に追加
  const exportStatement = '\n\n// Global component type definitions for app.use()\n' + globalTypesWithoutImports;

  indexDts += exportStatement;
  writeFileSync(indexDtsPath, indexDts, 'utf-8');
  console.log('✓ Global component types added to dist/index.d.ts');
}
