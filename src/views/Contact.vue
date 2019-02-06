<template>
  <section class="contact-us-promo">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="contact-us-left">
              <h4>GET IN TOUCH</h4>
              <p>
                We’re more than happy to contact. Give us a call or just drop a
                message & we’ll get in touch with you soon!
              </p>

              <form action="#" method="post">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">Email *</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="phone-number">Phone number </label>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="company-name">Company Name </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea name="message" id="message" class="form-control">
                  </textarea>
                </div>

                <div class="form-group">
                  <button class="btn btn-style1">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-us-right">
              <div class="contact-info-block">
                <h2 class="heading">MALSAN CONTACT</h2>

                <div class="ci-info">
                  <h3>Malsan trading co.l.t.d.</h3>
                  <address>
                    BESIDE KERA GOFA HOTEL /BELOW SINI BUILDING <br />
                    ቄራ ጎፋ ሆቴል ኣጠገብ ሳኒ ህንፃ ስር <br />
                    <a href="tel:+251 911225143">+251 911225143</a> <br />
                    <a href="tel:+251 910179674">+251 910179674</a> <br />
                    <a href="mailto:salmmohha@yahoo.com">salmmohha@yahoo.com</a>
                    <br />
                  </address>
                  <br />

                  <h3>Telephone.</h3>
                  <address>
                    <a href="tel:0114701457">0114701457 </a> <br />
                    <a href="tel:0114702421">0114702421 </a> <br />
                  </address>

                  <a href="https://goo.gl/maps/oeFVu2S6jP32" class="map-link"
                    >View on google map</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'contact'
}
</script>
