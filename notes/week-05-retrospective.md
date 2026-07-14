# Week 05 Retrospective

## Bu Hafta Öğrendiklerim

- Vite ile React ve TypeScript projesi oluşturma
- JSX kullanımı
- Component oluşturma
- Import ve export kullanımı
- Props ile componentlere veri gönderme
- TypeScript ile props tipi yazma
- useState kullanımı
- Conditional render
- Koşullu className
- Loading, error ve empty state
- Tic-Tac-Toe oyun mantığı
- State'i doğrudan değiştirmeden güncelleme
- Hamle geçmişi tutma
- Reset butonu ve skor sayacı oluşturma

## Zorlandığım 3 Nokta

### 1. Props ve Veri Akışı

Verinin bir componentten başka bir componente nasıl geçtiğini anlamakta zorlandım.

Örnek veri akışı:

```text
App → ProjectList → Card → Button
```

Parent component veriyi props ile child componente gönderir.

### 2. useState ve Eski State

State'in nasıl güncellendiğini ve eski state callback yapısını anlamakta zorlandım.

Örnek:

```tsx
setCount((previousCount) => previousCount + 1);
```

Yeni değer eski değere bağlıysa callback kullanmak daha güvenlidir.

### 3. Tic-Tac-Toe History Mantığı

Her hamlenin ayrı bir tahta array'i olarak `history` içinde tutulması zor geldi.

```text
history[0] → Boş tahta
history[1] → Birinci hamleden sonraki tahta
history[2] → İkinci hamleden sonraki tahta
```

Bu yapı sayesinde geçmiş hamlelere dönülebilir.

## Genel Değerlendirme

Bu hafta yazılan bütün kodları henüz kendi başıma sıfırdan yazamıyorum.

Ancak component, props ve state kavramlarının ne işe yaradığını görmeye başladım.

Şu anki hedefim kodları ezberlemek değil; kodu gördüğümde hangi parçanın ne yaptığını anlamaktır.

Daha fazla tekrar yaptıkça küçük componentleri kendi başıma yazmaya başlamayı hedefliyorum.