# Sunday React Review

## Component

Component, arayüzün tekrar kullanılabilir küçük bir parçasıdır.

Örnek componentler:

- Header
- Button
- Card
- Counter
- TicTacToe

Bir component JSX döndüren JavaScript veya TypeScript fonksiyonudur.

Örnek:

```tsx
function Header() {
  return <h1>React Projesi</h1>;
}

export default Header;
```

## Props

Props, parent componentten child componente veri göndermek için kullanılır.

Örnek:

```tsx
<Button label="Projeyi Gör" />
```

Burada Button componentine `label` adında bir prop gönderilir.

Props sayesinde aynı componenti farklı verilerle tekrar kullanabiliriz.

```tsx
<Button label="Yeni Tur" />
<Button label="Skorları Sıfırla" />
```

## State

State, component içinde zamanla değişen veriyi tutar.

Örnek:

```tsx
const [count, setCount] = useState(0);
```

- `count`: Mevcut değer
- `setCount`: Değeri güncelleyen fonksiyon
- `0`: Başlangıç değeri

State değişince React componenti yeniden render edilir.

## Props ve State Farkı

- Props componentin dışından gelir.
- State componentin içinde tutulur.
- Props componenti farklı verilerle kullanmayı sağlar.
- State ekranda değişen bilgileri yönetir.

Örnekler:

- Kart başlığı: props
- Buton yazısı: props
- Sayaç değeri: state
- Modal açık mı: state
- Inputa yazılan metin: state
- Tic-Tac-Toe tahtası: state

## Eski State Kullanımı

Yeni değer eski state değerine bağlıysa callback kullanılır.

```tsx
setCount((previousCount) => previousCount + 1);
```

Bu kod en güncel count değerini alır ve 1 artırır.