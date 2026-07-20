# React + TypeScript + Vite

Bu proje, React’in Vite ile hızlı geliştirme ortamında çalışmasını sağlayan temel bir yapı üzerine kurulmuştur. Projede Hot Module Replacement (HMR), TypeScript ve Oxlint kullanılmaktadır.

Şu anda iki resmî React eklentisi kullanılabilir:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react), [Oxc](https://oxc.rs) kullanır.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc), [SWC](https://swc.rs) kullanır.

## React Compiler

React Compiler, geliştirme ve build performansına etkisi nedeniyle bu şablonda varsayılan olarak etkin değildir.

Eklemek için React’in resmî dokümantasyonunu inceleyebilirsin:

[React Compiler Kurulumu](https://react.dev/learn/react-compiler/installation)

## Oxlint Yapılandırmasını Genişletme

Üretim ortamına yönelik bir uygulama geliştirirken, tip bilgisine dayalı lint kurallarını etkinleştirmek faydalı olabilir.

Bunun için `oxlint-tsgolint` paketini kurup `.oxlintrc.json` dosyasını aşağıdaki şekilde düzenleyebilirsin:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": [
      "warn",
      {
        "allowConstantExport": true
      }
    ]
  }
}
```

Tüm kurallar ve kategoriler için:

[Oxlint Kuralları Dokümantasyonu](https://oxc.rs/docs/guide/usage/linter/rules)

---

# Hafta 5 — React Tic-Tac-Toe

React’in resmî Tic-Tac-Toe öğreticisi temel alınarak TypeScript ile geliştirilmiş interaktif bir oyun uygulamasıdır.

## Özellikler

- 3x3 Tic-Tac-Toe oyun tahtası
- X ve O oyuncu sırası
- Kazanan kontrolü
- Beraberlik kontrolü
- Hamle geçmişi
- Önceki hamlelere dönebilme
- Yeni tur başlatma
- X ve O skor sayacı
- Beraberlik sayacı
- Skorları sıfırlama
- Responsive görünüm

## Bu Projede Öğrendiklerim

- React component mantığı
- Props ile componentler arasında veri aktarımı
- TypeScript ile prop tiplerini tanımlama
- `useState` kullanımı
- State’i parent componentte tutma
- Array verisini doğrudan değiştirmeden güncelleme
- `map` ile component render etme
- Koşullu render
- Önceki state üzerinden state güncelleme
- Hamle geçmişi tutma
- Componentleri sorumluluklarına göre ayırma

## Component Yapısı

### `Square`

Tek bir oyun karesini gösterir.

### `Board`

- Dokuz oyun karesini gösterir.
- Oyunun mevcut durumunu ekrana yansıtır.
- Kare tıklamalarını yönetir.

### `TicTacToe`

- Hamle geçmişini yönetir.
- X, O ve beraberlik skorlarını tutar.
- Önceki hamlelere dönme işlemini yönetir.
- Yeni tur ve skor sıfırlama işlemlerini kontrol eder.

## Projeyi Çalıştırma

Önce proje klasörüne gir:

```bash
cd react-ts-intro
```

Bağımlılıkları kur:

```bash
npm install
```

Geliştirme sunucusunu başlat:

```bash
npm run dev
```

PowerShell’de `npm` komutu script politikası nedeniyle çalışmazsa:

```powershell
npm.cmd run dev
```

Production build oluşturmak için:

```bash
npm run build
```

---

# Hafta 6 — Formlar, Router, Erişilebilirlik ve Global State

## Haftanın Amacı

Bu hafta React ve TypeScript uygulamasında şu konulara odaklanıldı:

- Controlled form yönetimi
- Client-side routing
- Erişilebilirlik
- Responsive tasarım
- Temel global state yönetimi
- Production build
- Vercel deployment

## Tamamlanan Konular

- `map` ve sabit `key` değerleriyle React listeleri oluşturuldu.
- Frequency counter algoritmaları tekrar edildi.
- Liste arayüzlerine empty state eklendi.
- Controlled React formu oluşturuldu.
- Form alanları `label`, `id` ve `aria-describedby` ile bağlandı.
- Submit işleminden sonra form state’i temizlendi.
- React Router ile şu sayfalar oluşturuldu:
  - Ana Sayfa
  - Projeler
  - Hakkımda
  - 404 Sayfası
- `Outlet` kullanılan ortak bir layout oluşturuldu.
- Aktif sayfa stiline sahip navbar linkleri eklendi.
- Şu özelliklere sahip bir Todo uygulaması geliştirildi:
  - Görev ekleme
  - Görev silme
  - Görevi tamamlandı yapma
  - Tamamlanmış görevi yeniden aktif yapma
  - Hepsi filtresi
  - Aktif filtresi
  - Tamamlanan filtresi
- Objectlerden oluşan array’lerde arama ve filtreleme çalışmaları yapıldı.
- React Context ile tema sistemi oluşturuldu.
- Zustand ile ortak kullanıcı state’i oluşturuldu.
- Local state, Context, Zustand ve Redux arasındaki temel farklar tekrar edildi.
- Todo arayüzü mobil ekranlar için responsive hâle getirildi.
- Uygulama yalnızca klavye kullanılarak test edildi.
- Uygulama Vercel üzerinden yayınlandı.

## Temel Kavramlar

### Controlled Input

Controlled input, görünen değerini React state’inden alan inputtur.

Inputun ekrandaki değeri:

```tsx
value={formValues.email}
```

kullanıcı değişikliklerini state’e aktaran yapı ise:

```tsx
onChange={handleInputChange}
```

olur.

Temel veri akışı:

```text
Kullanıcı inputa yazar
↓
onChange çalışır
↓
State güncellenir
↓
React yeniden render eder
↓
Inputun görünen değeri değişir
```

Form state’ini başlangıç değerine döndürerek inputları temizleyebiliriz:

```tsx
setFormValues(initialFormValues);
```

### React Router

React Router, URL adreslerini React sayfa componentleriyle eşleştirir.

```text
/              → Ana Sayfa
/projects      → Projeler
/about         → Hakkımda
Bilinmeyen URL → 404 Sayfası
```

Ortak layout içindeki child sayfalar `Outlet` aracılığıyla gösterilir:

```tsx
<Outlet />
```

Temel akış:

```text
Tarayıcı URL’si
↓
BrowserRouter
↓
Routes
↓
Eşleşen Route
↓
Sayfa componenti
↓
Outlet
```

### Immutable Todo Güncellemeleri

React state’inde bulunan array’leri doğrudan değiştirmeyiz. Bunun yerine yeni array üretiriz.

Yeni görev ekleme:

```tsx
setTodos((previousTodos) => [
  ...previousTodos,
  newTodo,
]);
```

Belirli bir görevi güncellemek için `map` kullanılır:

```tsx
setTodos((previousTodos) =>
  previousTodos.map((todo) =>
    todo.id === todoId
      ? {
          ...todo,
          completed: !todo.completed,
        }
      : todo,
  ),
);
```

Belirli bir görevi kaldırmak için `filter` kullanılır:

```tsx
setTodos((previousTodos) =>
  previousTodos.filter(
    (todo) => todo.id !== todoId,
  ),
);
```

### Global State

Projede farklı state yönetimi yaklaşımları kullanıldı.

#### `useState`

Tek bir componenti veya birbirine yakın componentleri ilgilendiren local state için kullanıldı.

Örnek:

```text
Todo input değeri
Form alanları
Seçili filtre
```

#### React Context

Uygulama genelindeki tema bilgisini paylaşmak için kullanıldı.

```text
ThemeProvider
↓
theme
toggleTheme
↓
Alt componentler
```

#### Zustand

Birbirinden uzak componentlerin aynı kullanıcı state’ine erişebilmesi için kullanıldı.

Örnek:

```text
UserStoreCard
↓
Giriş ve çıkış işlemleri

SiteNavbar
↓
Oturum durumunu gösterme
```

#### Redux

Redux projeye kurulmadı.

Yalnızca şu temel mantık kavramsal olarak tekrar edildi:

```text
UI işlemi
↓
Action
↓
Reducer
↓
Yeni state
↓
Store güncellenir
↓
UI yeniden render edilir
```

### Erişilebilirlik

Uygulamada semantik HTML elementleri kullanıldı:

- `nav`
- `main`
- `form`
- `label`
- `input`
- `textarea`
- `button`

Form alanları görünür label’larla bağlandı:

```tsx
<label htmlFor="email">
  E-posta
</label>

<input
  id="email"
  type="email"
/>
```

Yardım metinleri `aria-describedby` ile inputlara bağlandı:

```tsx
<input
  id="email"
  aria-describedby="email-help"
/>

<p id="email-help">
  Geçerli bir e-posta adresi yaz.
</p>
```

Todo filtrelerinin seçili durumu `aria-pressed` ile belirtildi:

```tsx
aria-pressed={filter === "active"}
```

Silme butonları, hangi görevin silineceğini açıklayan erişilebilir isimler kullandı:

```tsx
aria-label={`${todo.title} görevini sil`}
```

## Klavye Testi

Uygulama yalnızca klavye kullanılarak test edildi.

Kullanılan tuşlar:

- `Tab`
- `Shift + Tab`
- `Enter`
- `Space`

Test edilen alanlar:

- Navbar linkleri
- Tema butonu
- Todo inputu
- Ekle butonu
- Hepsi / Aktif / Tamamlanan filtreleri
- Todo checkboxları
- Silme butonları
- Demo giriş ve çıkış butonları

Test sonucunda:

- Navbar linklerine klavyeyle ulaşılabildi.
- Linkler Enter ile açılabildi.
- Tema butonu Enter ve Space ile çalıştı.
- Todo formu Enter ile gönderilebildi.
- Filtre butonları klavyeyle çalıştı.
- Checkboxlar Space ile değiştirilebildi.
- Silme butonları klavyeyle çalıştı.
- Focus göstergeleri açık ve koyu temada görünür kaldı.
- Klavye kullanıcısını engelleyen bir sorun bulunmadı.

Bu nedenle sırf değişiklik yapmak amacıyla gereksiz erişilebilirlik kodu eklenmedi.

## Responsive Tasarım

Todo arayüzü farklı ekran genişliklerine göre uyarlandı.

Masaüstünde:

```text
[ Yeni görev inputu ] [ Ekle ]
```

Mobilde:

```text
[ Yeni görev inputu ]
[ Ekle               ]
```

Dar ekranlarda:

- Form alanları alt alta gelir.
- Filtre butonları daha uygun şekilde yerleşir.
- Todo satırları dikey düzene geçer.
- Silme butonu tam genişlik kullanabilir.
- Uzun görev metinlerinin taşması engellenir.

## Vercel Deployment

Uygulama Vercel üzerinden yayınlandı.

Canlı proje:

[React TypeScript Hafta 5–6 Canlı Projesi](https://react-typescript-week-05-06.vercel.app)

SPA route’larının yenileme sonrasında da çalışması için `vercel.json` içinde rewrite ayarı kullanıldı:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Bu ayar sayesinde:

```text
/projects
/about
/bilinmeyen-sayfa
```

gibi adresler önce `index.html` dosyasına ulaşır. Ardından hangi sayfanın gösterileceğine React Router karar verir.

## Hafta 6 Değerlendirmesi

Bu haftanın en zor konuları:

- Controlled input ile state arasındaki veri akışını anlamak
- Nested route ve `Outlet` mantığını kavramak
- Objectlerden oluşan array’leri state’i doğrudan değiştirmeden güncellemek
- Local state ile global state arasındaki farkı anlamak
- Context ve Zustand’ın hangi durumlarda kullanılacağını ayırmak

Bu haftanın en önemli sonucu:

> React arayüzü state’ten üretilir. State doğru şekilde güncellendiğinde React ilgili componentleri yeniden render eder ve arayüz otomatik olarak değişir.

## Kullanılan Teknolojiler

- React
- TypeScript
- Vite
- React Router
- React Context
- Zustand
- CSS
- Git
- GitHub
- Vercel

## Canlı Proje

[https://react-typescript-week-05-06.vercel.app](https://react-typescript-week-05-06.vercel.app)