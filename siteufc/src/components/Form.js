import React from "react";

const Mailer = () => {
  return (
    <div className="container border">
      <h3>contactez moi</h3>
      <form>
        <div className="form-style">
          <label for="name_field">Votre nom</label>
          <input
            type="text"
            className="name_field"
            name="name_field"
            required
          ></input>
          <div className="form-style">
            <label for="_replyto">Votre email</label>
            <input
              type="email"
              className="_replyto"
              name="_replyto"
              required
            ></input>
          </div>
          <div className="form-style">
            <label for="textarea_message">Votre Message</label>
            <textarea
              className="textarea_message"
              name="textarea_message"
            ></textarea>
          </div>
          <div className="form-style"></div>
          <button type="submit" className="form-button">
            c'est parti !
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mailer;
