require 'rails_helper'

RSpec.describe "User can create trail" do
  it 'can manually fill in information to create trail' do
    user = create(:user)
    trail = build(:trail)
    create(:difficulty, rating: 'Double Black Diamond')

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit new_trail_path

    fill_in "Name", with: trail.name
    fill_in "Description", with: trail.description
    select "Double Black Diamond", from: "trail[difficulty_id]"
    fill_in "Location", with: trail.location
    fill_in "Distance", with: trail.distance

    click_on "Create Trail"
    trail = Trail.first

    expect(page).to have_content('Trail Created')
    expect(current_path).to eq(trail_path(trail.id))
    expect(page).to have_content(trail.name)
    expect(page).to have_content(trail.description)
    expect(page).to have_content(trail.difficulty.rating)
    expect(page).to have_content(trail.location)
    expect(page).to have_content(trail.distance)
  end
end
