class PagesController < ApplicationController
  def index
    @page = Page.home
    render :action => (@page ? 'show' : 'no_page')
  end
  
  def show
    @page = Page.find(params[:id])
  end
  
  def history
    @page = Page.find(params[:id])
  end
  
  def new
    @page = Page.new
  end
  
  def edit
    @page = Page.find(params[:id])
  end
  
  def create
    @page = Page.new(params[:page])
    @page.save!
    redirect_to page_path(@page)
  end

  def update
    @page = Page.find(params[:id])
    @page.update_attributes!(params[:page])
    redirect_to page_path(@page)
  end
end
