import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkndgppr");

  if (state.succeeded) {
    return (
      <div className="block uppercase text-md font-bold mb-2">
        Thanks for reaching out, our team will get in touch with you soon!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-2 ">
        <label
          htmlFor="full-name"
          className="block uppercase text-sm font-bold mb-2"
        >
          Full Name
        </label>
        <input
          className="mt-2 block w-full"
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required=""
        />

        <label
          htmlFor="email"
          className="block uppercase text-sm font-bold my-2"
        >
          Email address
        </label>
        <input
          className="mt-2 block w-full"
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="border-0 px-3 py-3 placeholder-neutral bg-secondary rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          placeholder="Email"
        />
        <fieldset id="fs-frm-selects">
          <label className="block uppercase text-sm font-bold my-2">
            Inquiry type
            <select
              className="block w-full mt-2 text-sm h-8 bg-neutral px-2"
              name="inquiry"
              id="inquiry"
              required=""
            >
              <option value="Select" defaultValue="" disabled="">
                Select an inquiry type
              </option>
              <option value="FoodTech">FoodTech</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="CleanTech">CleanTech</option>
              <option value="Mobility">Mobility</option>
              <option value="Water Sustainability">Water Sustainability</option>
            </select>
          </label>
        </fieldset>
        <label
          htmlFor="message"
          className="block uppercase text-sm font-bold mt-2 mb-2"
        >
          Your message
        </label>
        <textarea
          className="mt-2 mb-2 block w-full"
          rows="3"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input
          type="hidden"
          name="_inquiry"
          id="email-subject"
          value="Website Inquiry"
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-primary default:bg-primary btn-block uppercase text-sm font-bold px-6 rounded my-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
