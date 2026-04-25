const Cart = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-16 space-y-6">
      <p className="text-gold-500 tracking-[0.3em] text-xs">CART</p>
      <h1 className="text-4xl sm:text-5xl leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
        Carrinho
      </h1>
      <p className="text-text-secondary max-w-2xl">
        Esta rota fica reservada para gestão de carrinho, resumo de encomenda e início de checkout.
      </p>
    </section>
  );
};

export default Cart;
