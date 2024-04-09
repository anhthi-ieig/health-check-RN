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
  details_header_title: 'Chi tiết đặt lịch',
  details_content_name: 'Tên',
  details_content_phone: 'Điện thoại',
  details_content_location: 'Địa chỉ phòng khám',
  details_content_time: 'Thời gian',
  details_content_notes_1: `The clinic will not hold appointments if customers arrive more than 15 minutes late. Clinic staff will assist customers in scheduling a new appointment if they arrive late or do not show up for their scheduled appointment. Please arrive on time so that we can provide you with the best service. For further details, please contact`,
  details_content_notes_2: 'for assistance. We look forward to welcoming you to Jio Smart Clinic.',
  scanQR_header_title: 'Quét mã QR',
  scanQR_content_scan_the_qr_code_to_checkin: 'Quét mã QR của phòng khám để checkin',
  scanQR_content_requesting_for_camera_permission: 'Yêu cầu cấp quyền truy cập camera',
  scanQR_content_no_access_to_camera: 'Không có quyền truy cập camera',
  scanQR_content_flip_camera: 'Đổi camera',
  scanQR_content_checked_in_the: 'Đã checkin',
  settings_header_title: 'Cài đặt',
  settings_content_language: 'Ngôn ngữ',
};
