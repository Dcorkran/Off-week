function validPhoneNumber(phoneNumber){
  return /^\(\d\d\d\)\s\d\d\d-\d\d\d\d$/.test(phoneNumber);
}
