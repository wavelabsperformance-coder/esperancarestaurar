const GoogleMap = () => {
  return (
    <section className="pt-8">
      <div className="px-4 md:px-8 lg:px-16 mb-8 text-center">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          Onde estamos
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Visite nossa comunidade
        </h2>
        <p className="mt-3 font-body text-muted-foreground max-w-xl mx-auto">
          Receba nossa equipe pessoalmente. Para visitas, agende com antecedência pelo WhatsApp.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4729.79066021857!2d-34.934433500000004!3d-7.827521099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab6b6963665b73%3A0xa85cee570f502c01!2sR.%20Groel%C3%A2ndia%2C%20150%20-%20Jabac%C3%B3%2C%20Igarassu%20-%20PE%2C%2053647-575!5e1!3m2!1spt-BR!2sbr!4v1777513446927!5m2!1spt-BR!2sbr"
  className="block w-full h-[420px] md:h-[500px] border-0 rounded-2xl shadow-xl"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Localização da Comunidade Esperança e Restaurar Vidas"
/>
      </div>
    </section>
  );
};

export default GoogleMap;
