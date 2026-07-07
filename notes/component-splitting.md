# Component Splitting Notes

React'te component parçalama, arayüzü küçük ve tekrar kullanılabilir parçalara ayırmak demektir.

## Neden component parçalarız?

- App.tsx dosyasının aşırı büyümesini engellemek için.
- Aynı UI parçasını tekrar kullanabilmek için.
- Her componentin tek bir sorumluluğu olması için.
- Kodun okunabilirliğini artırmak için.
- Hata bulmayı kolaylaştırmak için.

## Bugünkü yapı

- Header.tsx
  - Sayfanın üst başlık alanını gösterir.

- Button.tsx
  - Tekrar kullanılabilir buton componentidir.
  - label prop'u ile buton yazısı değişebilir.

- Card.tsx
  - Tek bir proje kartının görünümünü yönetir.
  - project prop'u alır.

- ProjectList.tsx
  - projects array'ini alır.
  - map ile her proje için Card componenti render eder.

- project.ts
  - Project ve ProjectStatus tiplerini tutar.

- App.tsx
  - Sayfanın ana düzenini kurar.
  - projects verisini tutar.
  - Header ve ProjectList componentlerini kullanır.

## Props mantığı

Props, parent componentten child componente veri göndermek için kullanılır.

Örnek:

```tsx
<ProjectList projects={projects} />


---

## Bu not neden önemli?

Çünkü React öğrenirken sadece kodu yazmak yetmez.

Şunu da anlaman gerekiyor:

```text id="982ss4"
Bu component neden ayrı dosyada?
Bu veri nereden geliyor?
Bu component neyin sorumluluğunu taşıyor?
Bu component başka yerde tekrar kullanılabilir mi?