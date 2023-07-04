require "test_helper"

class TeamControllerTest < ActionDispatch::IntegrationTest
  test "should get our_team" do
    get team_our_team_url
    assert_response :success
  end

  test "should get RMD" do
    get team_RMD_url
    assert_response :success
  end
end
