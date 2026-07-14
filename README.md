# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Week 05 - React Tic-Tac-Toe

React'in resmî Tic-Tac-Toe öğreticisi temel alınarak TypeScript ile hazırlanmış interaktif oyun projesidir.

### Özellikler

- 3x3 Tic-Tac-Toe oyun tahtası
- X ve O oyuncu sırası
- Kazanan kontrolü
- Beraberlik kontrolü
- Hamle geçmişi
- Önceki hamlelere dönebilme
- Yeni tur butonu
- X ve O skor sayacı
- Beraberlik sayacı
- Skorları sıfırlama
- Responsive görünüm

### Bu Projede Öğrendiklerim

- React component mantığı
- Props ile componentler arasında veri aktarma
- TypeScript prop tipleri
- useState kullanımı
- State'i parent componentte tutma
- Array verisini doğrudan değiştirmeden güncelleme
- map ile component render etme
- Conditional render
- Eski state üzerinden state güncelleme
- Hamle geçmişi tutma

### Component Yapısı

- `Square`
  - Tek bir oyun karesini gösterir.

- `Board`
  - Dokuz kareyi ve oyun durumunu gösterir.
  - Kare tıklamalarını yönetir.

- `TicTacToe`
  - Hamle geçmişini, skorları ve reset işlemlerini yönetir.

### Projeyi Çalıştırma

```bash
npm install
npm run dev
