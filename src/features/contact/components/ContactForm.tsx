export default function ContactForm() {
  return (
    <form className="grid grid-cols-1 gap-4 custom-shadow rounded-md p-5">
      <div>
        <label htmlFor="subject" className="block leading-loose">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="input input-bordered w-full rounded-md"
        />
      </div>
      <div>
        <label htmlFor="email" className="block leading-loose">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input input-bordered w-full rounded-md"
        />
      </div>
      <div>
        <label htmlFor="message" className="block leading-loose">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="input input-bordered w-full rounded-md min-h-32 max-h-32"
        ></textarea>
      </div>
      <div>
        <button className="btn btn-neutral">Send</button>
      </div>
    </form>
  );
}