export default function capitalCaseToSnackCase(text) {
    return text.toLowerCase().split(' ').join('_');
}