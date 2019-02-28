# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  screen_name     :string           not null
#  full_name       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token

  validates :email, :screen_name, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {in: (6..20), allow_nil: true}

  attr_reader :password

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    session_token = SecureRandom.urlsafe_base64
    self.save!
    session_token
  end

  def self.find_by_credentials(mail, pass)
    user = User.find_by(email: mail)

    if user && user.is_password?(pass)
      user
    else
      nil
    end
  end

  def self.registered?(mail)
    user = User.find_by(email: mail)
    !!user
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def is_password?(pass)
    BCrypt::Password.new(password_digest).is_password?(pass)
  end

end
