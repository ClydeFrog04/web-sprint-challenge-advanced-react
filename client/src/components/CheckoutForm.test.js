import React from "react";
import {fireEvent, render} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {
    const {getByTestId} = render(<CheckoutForm/>);
    const button = getByTestId(/checkout/i);
    fireEvent.click(button);//commenting out this line will make the test fail, because the success message doesn't appear if we never click the submit button
    getByTestId(/successMessage/i);
});
