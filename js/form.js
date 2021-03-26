document.getElementById('clear').addEventListener('click', (e) => {
    location.reload()
})

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const mobile = document.getElementById('mobile').value
    const city = document.getElementById('city').value
    const address = document.getElementById('address').value
    const zip_code = document.getElementById('zip_code').value

    const membership_number = document.getElementById('membership_number').value
    const additional_comment = document.getElementById('additional_comment').value
    const email = document.getElementById('email').value

    const payment_method_cash = document.getElementById("cash").checked
    const payment_method_credit = document.getElementById("credit").checked
    const credit_card_number = document.getElementById('credit_card_number').value
    const expire_date = document.getElementById('expire_date').value
    const cvv_number = document.getElementById('cvv_number').value

    const errors = [];

    if (name == '') {
        errors.push({ msg: 'please enter your name' })
    }

    if (mobile == '') {
        errors.push({ msg: 'please enter your mobile number' })
    } else if (isNaN(mobile)) {
        errors.push({ msg: 'please enter a valid mobile number' })
    }

    if (city == '') {
        errors.push({ msg: 'please enter your city' })
    }

    if (address == '') {
        errors.push({ msg: 'please enter your address' })
    }

    if (zip_code == '') {
        errors.push({ msg: 'please enter your zip code' })
    } else if (isNaN(zip_code)) {
        errors.push({ msg: 'please enter a valid zip code' })
    }

    if (membership_number == '') {
        errors.push({ msg: 'please enter your membership number' })
    } else if (isNaN(membership_number)) {
        errors.push({ msg: 'please enter a valid membership number' })
    }

    if (additional_comment == '') {
        errors.push({ msg: 'please enter additional comment' })
    }

    if (email == '') {
        errors.push({ msg: 'please enter your email' })
    } else if ((email.indexOf('@') <= 0)) {
        errors.push({ msg: 'please enter a valid email' })
    }

    if ((payment_method_cash || payment_method_credit) == false) {
        errors.push({ msg: 'please choose an payment method' })
    }

    if (payment_method_credit == true) {
        if (credit_card_number == '') {
            errors.push({ msg: 'please enter your credit card number' })
        } else if (isNaN(credit_card_number)) {
            errors.push({ msg: 'please enter a valid credit card number' })
        }

        if (expire_date == '') {
            errors.push({ msg: 'please enter credit card expire date' })
        }

        if (cvv_number == '') {
            errors.push({ msg: 'please enter your credit card cvv number' })
        } else if (isNaN(cvv_number)) {
            errors.push({ msg: 'please enter a valid credit card cvv number' })
        }
    }


    if (errors == false) {
        alert('payment success')
    } else {
        let arr = errors.map((error, index) => {
            return `${index + 1} - ${error.msg}`
        })
        let alert2 = arr.join('\n')
        alert('error have accourd!\n' + alert2)
    }

})



document.getElementById('credit').addEventListener('click', () => {
    document.getElementById('payment_way_info').style.display = "block";

})

document.getElementById('cash').addEventListener('click', () => {
    document.getElementById('payment_way_info').style.display = "none";

})