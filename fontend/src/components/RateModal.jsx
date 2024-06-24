import { CiStar } from "react-icons/ci";

const RateModal = () => {
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box text-center flex flex-col gap-2">
          <h3 className="font-semibold text-center text-lg">Your Feedback!</h3>
          <p className="font-bold text-lg text-orange-600  flex  justify-center gap-2">
            <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
          </p>
          <textarea
            className="textarea textarea-accent"
            placeholder="Say Something"
          ></textarea>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default RateModal;
