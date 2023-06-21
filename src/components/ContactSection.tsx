const ContactSection = () => {
  return (
    <section className="w-full bg-blue-200 py-16 contact-section">
      <div className="max-w-sm space-y-4 px-4 mx-auto text-center">
        <p className="text-sm text-white font-thin uppercase tracking-widest">
          35,000+ already joined
        </p>
        <h4 className="text-2xl text-white font-medium">
          Stay up-to-date with what we're doing
        </h4>
        <Form />
      </div>
    </section>
  );
};

function Form() {
  return (
    <div className="contact-section__form flex flex-col md:flex-row gap-4">
      <input className="rounded flex-grow py-3 px-2 md:py-0" type="text" />
      <button className="bg-red text-white rounded px-4 py-3 capitalize">contact us</button>
    </div>
  );
}

export default ContactSection;
