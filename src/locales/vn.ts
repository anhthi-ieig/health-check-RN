/**
 * Key format: screen_component_element
 */

const validationMsg = {
  validation_required: 'Trường này bắt buộc',
  validation_something_went_wrong: 'Có gì đó không đúng',
};

const commonMsg = {
  common_back: 'Trở lại',
  common_at: 'tại',
};

export const vnLang = {
  ...validationMsg,
  ...commonMsg,
  home_header_slogan: 'Đạt được sức khỏe tối ưu',
  home_form_name: 'Tên',
  home_form_phone: 'Điện thoại',
  home_form_location: 'Địa chỉ phòng khám',
  home_form_choose_a_location: 'Chọn một địa điểm',
  home_form_date: 'Ngày',
  home_form_time: 'Giờ',
  home_form_book: 'Đặt chỗ',
  home_form_checkin: 'Checkin',
  home_form_book_success_msg: 'Đặt chỗ đã được nhận. Vui lòng xem lại chi tiết',
  scanQR_header_title: 'Quét mã QR',
  scanQR_content_scan_the_qr_code_to_checkin: 'Quét mã QR của phòng khám để checkin',
  scanQR_content_requesting_for_camera_permission: 'Yêu cầu cấp quyền truy cập camera',
  scanQR_content_no_access_to_camera: 'Không có quyền truy cập camera',
  scanQR_content_flip_camera: 'Đổi camera',
  scanQR_content_checked_in_the: 'Đã checkin',
};
