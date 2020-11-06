import http from "./httpService";
const apiEndPoint = "/users";

export function register(user) {
    return http.post(apiEndPoint, {
        email: user.email,
        password: user.password,
        name: user.name,
        phone: user.phone,
        drivingLicense: user.drivingLicense,
        card: {
            cardNumber: user.card.cardNumber,
            cvv: user.card.cvv,
            expiry: user.card.expiry,
            cardType: user.cardType,
        },
    });
}
