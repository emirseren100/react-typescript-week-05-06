# Tic-Tac-Toe Code Review

## 1. Tahta Array'ini Kopyalama

```tsx
const nextSquares = squares.slice();
```

Bu satır mevcut `squares` array'inin bir kopyasını oluşturur.

React state'ini doğrudan değiştirmek yerine yeni bir array oluşturuyoruz.

Yanlış yaklaşım:

```tsx
squares[index] = "X";
```

Daha doğru yaklaşım:

```tsx
const nextSquares = squares.slice();
nextSquares[index] = "X";
```

## 2. Oyuncu Sırasını Belirleme

```tsx
const xIsNext = currentMove % 2 === 0;
```

Bu satır sıradaki oyuncunun X mi O mu olduğunu belirler.

- `currentMove = 0` ise X oynar.
- `currentMove = 1` ise O oynar.
- `currentMove = 2` ise X oynar.
- `currentMove = 3` ise O oynar.

Çift hamlelerde X, tek hamlelerde O oynar.

## 3. Skoru Güncelleme

```tsx
setScores((previousScores) => ({
  ...previousScores,
  [winner]: previousScores[winner] + 1,
}));
```

Bu kod önce en güncel skor objectini alır.

```tsx
...previousScores
```

kısmı diğer skorları korur.

```tsx
[winner]: previousScores[winner] + 1
```

kısmı kazanan oyuncunun skorunu 1 artırır.

Kazanan X ise:

```text
X skoru 1 artar.
O ve beraberlik skorları aynı kalır.
```

Kazanan O ise:

```text
O skoru 1 artar.
X ve beraberlik skorları aynı kalır.
```