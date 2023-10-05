import { useState } from "react";

import { Button } from "../components/Components";
import BannerImg from "../assets/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg";
import "../components/components.css";

export function ReservationPage() {
  return (
    <div className='w-full flex flex-col items-center lg:px-60'>
      <Banner />
      <Form />
    </div>
  );
}

function Banner() {
  return <img src={BannerImg} alt='banner' />;
}

function Form() {
  const [step, setStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lo que quieras hacer cuando se envíe el form.

    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(0);
    }
  };

  if (step === 0) {
    return (
      <form
        className='w-full flex flex-col gap-10 px-5'
        onSubmit={handleSubmit}
      >
        <FormStep1 />
        <Button text={"NEXT STEP"} />
      </form>
    );
  } else if (step === 1) {
    return (
      <form
        className='w-full flex flex-col gap-10 px-5'
        onSubmit={handleSubmit}
      >
        <FormStep2 />
        <Button text={"Make Reservation"} />
      </form>
    );
  } else if (step === 2) {
    return (
      <div className='flex flex-col gap-10 px-5'>
        <p className='text-center font-bold text-color1 text-3xl leading-loose'>
          Your reservation has been confirmed!
        </p>
        <p className='text-center font-medium text-color1 text-xl'>
          Thank you for making a reservation with us, we are looking forward to
          seeing you soon!
        </p>
        <div onClick={handleSubmit}>
          <Button text={"Return to Reservation Home"} />
        </div>
      </div>
    );
  }
}

function FormStep1() {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='text-3xl font-medium text-center text-color1'>
        Reservation
      </h2>
      <div className='flex flex-col '>
        <label htmlFor='date' className='text-xl font-medium text-color1'>
          Date
        </label>
        <input
          type='date'
          name='date'
          id='date'
          className='p-2 bg-neutral-100 rounded'
        />
      </div>

      <div className='flex flex-col '>
        <label htmlFor='time' className='text-xl font-medium text-color1'>
          Time
        </label>
        <input
          type='time'
          name='time'
          id='time'
          className='p-2 bg-neutral-100 rounded'
        />
      </div>

      <div className='flex flex-col '>
        <label htmlFor='time' className='text-xl font-medium text-color1'>
          Party size
        </label>
        <input
          type='number'
          name='party-size'
          id='party-size'
          max={100}
          className='p-2 bg-neutral-100 rounded'
        />
      </div>

      <div className='flex justify-between'>
        <label
          htmlFor='notification'
          className='w-3/4 text-xl font-medium text-color1'
        >
          Allow notification for reservation
        </label>
        <input
          type='checkbox'
          name='notification'
          id='notification'
          className='w-7'
        />
      </div>
    </div>
  );
}

function FormStep2() {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='text-3xl font-medium text-center text-color1'>
        Contact Info
      </h2>

      <div className='flex justify-between'>
        <div className='w-5/12 flex flex-col'>
          <label htmlFor='name' className='text-xl font-medium text-color1'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='p-2 bg-neutral-100 rounded'
          />
        </div>
        <div className='w-5/12 flex flex-col'>
          <label
            htmlFor='last-name'
            className='text-xl font-medium text-color1'
          >
            Last Name
          </label>
          <input
            type='text'
            name='last-name'
            id='last-name'
            className='p-2 bg-neutral-100 rounded'
          />
        </div>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='email' className='text-xl font-medium text-color1'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className='p-2 bg-neutral-100 rounded'
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='phone' className='text-xl font-medium text-color1'>
          Phone Number
        </label>
        <input
          type='tel'
          name='phone'
          id='phone'
          className='p-2 bg-neutral-100 rounded'
        />
      </div>
    </div>
  );
}
