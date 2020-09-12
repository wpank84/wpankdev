class ParagraphsController < ApplicationController
  before_action :set_paragraph, only: %i[show edit update destroy]

  # GET /paragraphs
  # GET /paragraphs.json
  def index
    @paragraphs = Paragraph.all
  end

  # GET /paragraphs/1
  # GET /paragraphs/1.json
  def show; end

  # GET /paragraphs/new
  def new
    @paragraph = Paragraph.new
  end

  # GET /paragraphs/1/edit
  def edit; end

  # POST /paragraphs
  # POST /paragraphs.json
  def create
    @project = Project.find(params[:project_id])
    @paragraph = @project.paragraph.create(paragraph_params)

    respond_to do |format|
      if @paragraph.save
        format.html { redirect_to project_path(@project), notice: 'Paragraph was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @paragraph.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /paragraphs/1
  # PATCH/PUT /paragraphs/1.json
  def update
    respond_to do |format|
      if @paragraph.update(paragraph_params)
        format.html { redirect_to @paragraph, notice: 'Paragraph was successfully updated.' }
        format.json { render :show, status: :ok, location: @paragraph }
      else
        format.html { render :edit }
        format.json { render json: @paragraph.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /paragraphs/1
  # DELETE /paragraphs/1.json
  def destroy
    @paragraph.destroy
    respond_to do |format|
      format.html { redirect_to paragraphs_url, notice: 'Paragraph was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_paragraph
    @paragraph = Paragraph.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def paragraph_params
    params.require(:paragraph).permit(:content, :project_id)
  end
end
