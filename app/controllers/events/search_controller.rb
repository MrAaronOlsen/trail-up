class Events::SearchController < ApplicationController
  include Location

  def index
    @events = Event.send(params[:search_by].to_sym, search_params)
  end

  private

    def search_params
      {
        location: get_location,
        radius: get_radius,
        query: params[:event_search],
        end_date: (params[:end_date].nil? || params[:end_date].empty?) ? params[:event_search] : params[:end_date],
      }
    end
end
