import Button from "./button";

const ContactForm = () => {
  return ( 
    <div className="bg-white/70 p-10 rounded-lg w-full max-w-[46rem]">
      <form className="flex flex-col gap-5 w-full">

        <div className="flex flex-col gap-2">
          <label className="font-semibold">First Name<span className="text-red-500">*</span></label>
          <input type="text" className="border-black/20 border p-2"></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Last Name<span className="text-red-500">*</span></label>
          <input type="text" className="border-black/20 border p-2"></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Your Email<span className="text-red-500">*</span></label>
          <input type="email" className="border-black/20 border p-2"></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Your Message<span className="text-red-500">*</span></label>
          <textarea className="border-black/20 border p-2 min-h-40"></textarea>
        </div>

        <Button>
          Send Message
        </Button>
      </form>
    </div>
  );
}
 
export default ContactForm;