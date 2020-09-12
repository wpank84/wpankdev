require "application_system_test_case"

class ParagraphsTest < ApplicationSystemTestCase
  setup do
    @paragraph = paragraphs(:one)
  end

  test "visiting the index" do
    visit paragraphs_url
    assert_selector "h1", text: "Paragraphs"
  end

  test "creating a Paragraph" do
    visit paragraphs_url
    click_on "New Paragraph"

    fill_in "Content", with: @paragraph.content
    fill_in "Project", with: @paragraph.project_id
    click_on "Create Paragraph"

    assert_text "Paragraph was successfully created"
    click_on "Back"
  end

  test "updating a Paragraph" do
    visit paragraphs_url
    click_on "Edit", match: :first

    fill_in "Content", with: @paragraph.content
    fill_in "Project", with: @paragraph.project_id
    click_on "Update Paragraph"

    assert_text "Paragraph was successfully updated"
    click_on "Back"
  end

  test "destroying a Paragraph" do
    visit paragraphs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Paragraph was successfully destroyed"
  end
end
