export function formatVietnamesePhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, '');

    phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '+84 $1 $2 $3');

    return phoneNumber;
}