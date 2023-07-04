require "test_helper"

class ServicesControllerTest < ActionDispatch::IntegrationTest
  test "should get audio_production" do
    get services_audio_production_url
    assert_response :success
  end

  test "should get video_production" do
    get services_video_production_url
    assert_response :success
  end

  test "should get live_event_streaming" do
    get services_live_event_streaming_url
    assert_response :success
  end

  test "should get graphic_design" do
    get services_graphic_design_url
    assert_response :success
  end

  test "should get web_development" do
    get services_web_development_url
    assert_response :success
  end
end
