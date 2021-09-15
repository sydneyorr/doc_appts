class Api::DoctorsController < ApplicationController
before_action :set_doctor, only: [:show, :destroy, :update]

def index
  render json: Doctor.all
end

def show
  render json: @doctor
end

def create
  @doctor = Doctor.new(doctor_params)
  if (@doctor.save)
    render json: @doctor
  else
    render json: {error: @doctor.errors}, status: 422
  end
end

def update
  if(@doctor.update(doctor_params))
    render json: @doctor
  else
    render json: {error: @doctor.errors}, status: 422
  end
end

def destroy
  @doctor.destroy
  render json: @doctor
end


private

def doctor_params
  params.require(:doctor).permit(:name, :specialty)
end

def set_doctor
  @doctor = Doctor.find(params[:id])
end

end
