import { CiStar } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { PiSmileyMehBold } from "react-icons/pi";
import { CgSmileMouthOpen } from "react-icons/cg";

const Feedback = () => {
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box text-center flex flex-col gap-2">
          <h3 className="font-semibold text-center text-lg">Rate Now!</h3>
          <p>We would like your feedback to improve our website </p>
          <p className="font-bold text-lg text-[#660062]  flex  justify-center gap-2">
            <FaRegSmile /> <PiSmileyMehBold /> <CgSmileMouthOpen />
            <PiSmileyMehBold /> <CgSmileMouthOpen />
          </p>
          <textarea
            className="textarea textarea-accent"
            placeholder="Say Something"
          ></textarea>
          <div className="flex gap-2">
            <button className="btn mt-6 bg-[#C50076] text-white">Send</button>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-[#C50076] text-white">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Feedback;
