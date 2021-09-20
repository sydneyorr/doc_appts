class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :user

  def self.and_more
    appointments = Appointment.all
    appointments.map do |appointment|
      {id: appointment.id, date: appointment.date, time: appointment.time, user: appointment.user, doctor: appointment.doctor}
    end
  end
end
