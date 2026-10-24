export default function ContactPage() {
  return (
    <div className="contact-wrapper">
      <h1 className="page-title">Hubungi Kami</h1>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>Informasi Kontak</h2>
          <ul className="contact-list">
            <li> hello@corshot.id</li>
            <li> +62 812 3456 7890</li>
            <li> Jakarta, Indonesia</li>
          </ul>
        </div>

        <form className="contact-card">
          <input type="text" placeholder="Nama Anda" className="form-input" />
          <input type="email" placeholder="Email Anda" className="form-input" />
          <textarea rows={4} placeholder="Pesan Anda" className="form-input"></textarea>
          <button type="button" className="form-submit">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}