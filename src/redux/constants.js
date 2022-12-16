export const API_URL="https://node-revelogue.vercel.app/api/v1/";
// export const API_URL = "http://localhost:3001/api/v1/";

export const HTTP_STATUS = Object.freeze({
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
  // BLOCKED: 'BLOCKED',
  // DELETED: 'DELETED',
  // DELETE_FAILED: 'DELETE_FAILED',
  // EDITED: 'EDITED',
  // EDIT_FAILED: 'EDIT_FAILED',
  // INSERTED: 'INSERTED',
  // INSERT_FAILED: 'INSERT_FAILED',
});

export const regex = {
  validFullname: new RegExp(
    /(?:[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}\s)+[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+/g
  ),
  validEmail: new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  ),
  validPassword: new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
  ),
  validUsername: new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{8,32}$/gim),
};

export const errorMessage = {
  fullname: "Tên người dùng không được chứa ký tự đặc biệt và số !",
  username:
    "Username nên chứa từ 8 tới 32 ký tự, có thể chứa dấu gạch chân hoặc dấu chấm !",
  email: "Email không khả dụng !",
  password:
    "Mật khẩu phải chứa từ 8 tới 32 ký tự, có ít nhất 1 chữ Hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt !",
  confirmPassword: "Mật khẩu không trùng khớp !",
};
