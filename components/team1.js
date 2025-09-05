import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team1 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team1-max-width thq-section-max-width">
          <div className="team1-section-title">
            <span className="thq-body-small team1-text10">
              {props.content1 ?? (
                <Fragment>
                  <span className="team1-text69">Join Our Team Today!</span>
                </Fragment>
              )}
            </span>
            <div className="team1-content10">
              <h2 className="thq-heading-2 team1-text11">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team1-text66">Meet our team</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large team1-text12">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team1-text44">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team1-content11">
            <div className="team1-content12">
              <div className="team1-row1">
                <div className="team1-container1">
                  <div className="team1-card1">
                    <img
                      alt={props.member1Alt}
                      src={props.member1Src}
                      loading="lazy" className="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content13">
                      <div className="team1-title1">
                        <span className="team1-text13 thq-body-small">
                          {props.member1 ?? (
                            <Fragment>
                              <span className="team1-text47">John Doe</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text14 thq-body-small">
                          {props.member1Job ?? (
                            <Fragment>
                              <span className="team1-text48">
                                Head Technician
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text15 thq-body-small">
                        {props.member1Content ?? (
                          <Fragment>
                            <span className="team1-text67">
                              John is our experienced technician with over 10
                              years of repairing washing machines. He
                              specializes in diagnosing complex issues and
                              finding effective solutions.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons1">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team1-card2">
                    <img
                      alt={props.member2Alt}
                      src={props.member2Src}
                      loading="lazy" className="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content14">
                      <div className="team1-title2">
                        <span className="team1-text16 thq-body-small">
                          {props.member2 ?? (
                            <Fragment>
                              <span className="team1-text64">Jane Smith</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text17 thq-body-small">
                          {props.member2Job ?? (
                            <Fragment>
                              <span className="team1-text56">
                                Senior Technician
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text18 thq-body-small">
                        {props.member2Content ?? (
                          <Fragment>
                            <span className="team1-text58">
                              Jane has a keen eye for detail and a passion for
                              fixing appliances. With her expertise, she ensures
                              that every repair is done with precision and care.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons2">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="team1-container2">
                  <div className="team1-card3">
                    <img
                      alt={props.member3Alt}
                      src={props.member3Src}
                      loading="lazy" className="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content15">
                      <div className="team1-title3">
                        <span className="team1-text19 thq-body-small">
                          {props.member3 ?? (
                            <Fragment>
                              <span className="team1-text63">
                                Michael Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text20 thq-body-small">
                          {props.member3Job ?? (
                            <Fragment>
                              <span className="team1-text61">
                                Electronics Specialist
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text21 thq-body-small">
                        {props.member3Content ?? (
                          <Fragment>
                            <span className="team1-text54">
                              Michael is our go-to person for electronic
                              malfunctions in washing machines. His knowledge of
                              circuitry and components is unmatched, making him
                              an invaluable asset to our team.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons3">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team1-card4">
                    <img
                      alt={props.member4Alt}
                      src={props.member4Src}
                      loading="lazy" className="team1-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content16">
                      <div className="team1-title4">
                        <span className="team1-text22 thq-body-small">
                          {props.member4 ?? (
                            <Fragment>
                              <span className="team1-text51">Sarah Lee</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text23 thq-body-small">
                          {props.member4Job ?? (
                            <Fragment>
                              <span className="team1-text50">
                                Customer Service Manager
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text24 thq-body-small">
                        {props.member4Content ?? (
                          <Fragment>
                            <span className="team1-text60">
                              Sarah is dedicated to providing exceptional
                              customer service. She ensures that all inquiries
                              are handled promptly and that customers are
                              satisfied with our services.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons4">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team1-row2">
                <div className="team1-container3">
                  <div className="team1-card5">
                    <img
                      alt={props.member5Alt}
                      src={props.member5Src}
                      loading="lazy" className="team1-placeholder-image5 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content17">
                      <div className="team1-title5">
                        <span className="team1-text25 thq-body-small">
                          {props.member5 ?? (
                            <Fragment>
                              <span className="team1-text42">David Brown</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text26 thq-body-small">
                          {props.member5Job ?? (
                            <Fragment>
                              <span className="team1-text45">
                                Maintenance Specialist
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text27 thq-body-small">
                        {props.member5Content ?? (
                          <Fragment>
                            <span className="team1-text57">
                              David is responsible for the maintenance of our
                              repair equipment and tools. His attention to
                              detail guarantees that our tools are always in top
                              condition for any repair job.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons5">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team1-card6">
                    <img
                      alt={props.member6Alt}
                      src={props.member6Src}
                      loading="lazy" className="team1-placeholder-image6 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content18">
                      <div className="team1-title6">
                        <span className="team1-text28 thq-body-small">
                          {props.member6 ?? (
                            <Fragment>
                              <span className="team1-text41">Emily Wilson</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text29 thq-body-small">
                          {props.member6Job ?? (
                            <Fragment>
                              <span className="team1-text68">
                                Quality Control Inspector
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text30 thq-body-small">
                        {props.member6Content ?? (
                          <Fragment>
                            <span className="team1-text43">
                              Emily meticulously inspects every repaired washing
                              machine to ensure that it meets our high-quality
                              standards before being returned to the customer.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons6">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="team1-container4">
                  <div className="team1-card7">
                    <img
                      alt={props.member7Alt}
                      src={props.member7Src}
                      loading="lazy" className="team1-placeholder-image7 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content19">
                      <div className="team1-title7">
                        <span className="team1-text31 thq-body-small">
                          {props.member7 ?? (
                            <Fragment>
                              <span className="team1-text49">
                                Alex Rodriguez
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text32 thq-body-small">
                          {props.member7Job ?? (
                            <Fragment>
                              <span className="team1-text55">
                                Training Coordinator
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text33 thq-body-small">
                        {props.member7Content ?? (
                          <Fragment>
                            <span className="team1-text53">
                              Alex conducts training sessions for our
                              technicians to keep them updated on the latest
                              repair techniques and technologies in the
                              industry.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons7">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team1-card8">
                    <img
                      alt={props.member8Alt}
                      src={props.member8Src}
                      loading="lazy" className="team1-placeholder-image8 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content20">
                      <div className="team1-title8">
                        <span className="team1-text34 thq-body-small">
                          {props.member8 ?? (
                            <Fragment>
                              <span className="team1-text52">
                                Olivia Taylor
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text35 thq-body-small">
                          {props.member8Job ?? (
                            <Fragment>
                              <span className="team1-text65">
                                Parts Procurement Specialist
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text36 thq-body-small">
                        {props.member8Content ?? (
                          <Fragment>
                            <span className="team1-text59">
                              Olivia is in charge of sourcing high-quality parts
                              for repairs. Her efficiency in procurement ensures
                              that we have the necessary components for any
                              repair job.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons8">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-content21">
              <div className="team1-content22">
                <h2 className="thq-heading-2 team1-text37">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="team1-text40">We’re hiring!</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small team1-text38">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="team1-text62">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <button className="team1-button thq-button-filled">
                <span className="thq-body-small">
                  {props.actionContent ?? (
                    <Fragment>
                      <span className="team1-text46">Open positions</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team1-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team1-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-content10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-content11 {
            gap: var(--dl-layout-space-sixunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-content12 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team1-row1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team1-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team1-content13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text13 {
            font-style: normal;
            font-weight: 500;
          }
          .team1-text14 {
            text-align: center;
          }
          .team1-text15 {
            text-align: center;
          }
          .team1-social-icons1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team1-content14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text16 {
            font-style: normal;
            font-weight: 500;
          }
          .team1-text17 {
            text-align: center;
          }
          .team1-text18 {
            text-align: center;
          }
          .team1-social-icons2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team1-content15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text19 {
            font-style: normal;
            font-weight: 500;
          }
          .team1-text20 {
            text-align: center;
          }
          .team1-text21 {
            text-align: center;
          }
          .team1-social-icons3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image4 {
            width: 80px;
            height: 80px;
          }
          .team1-content16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text22 {
            font-style: normal;
            font-weight: 500;
          }
          .team1-text23 {
            text-align: center;
          }
          .team1-text24 {
            text-align: center;
          }
          .team1-social-icons4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-row2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team1-container3 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image5 {
            width: 80px;
            height: 80px;
          }
          .team1-content17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title5 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text25 {
            font-style: normal;
            font-weight: 500;
          }
          .team1-text26 {
            text-align: center;
          }
          .team1-text27 {
            text-align: center;
          }
          .team1-social-icons5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image6 {
            width: 80px;
            height: 80px;
          }
          .team1-content18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title6 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text28 {
            font-style: normal;
            font-weight: 500;
          }
          .team1-text29 {
            text-align: center;
          }
          .team1-text30 {
            text-align: center;
          }
          .team1-social-icons6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-container4 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image7 {
            width: 80px;
            height: 80px;
          }
          .team1-content19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title7 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text31 {
            font-style: normal;
            font-weight: 500;
          }
          .team1-text32 {
            text-align: center;
          }
          .team1-text33 {
            text-align: center;
          }
          .team1-social-icons7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card8 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image8 {
            width: 80px;
            height: 80px;
          }
          .team1-content20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title8 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text34 {
            font-style: normal;
            font-weight: 500;
          }
          .team1-text35 {
            text-align: center;
          }
          .team1-text36 {
            text-align: center;
          }
          .team1-social-icons8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-content21 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: column;
          }
          .team1-content22 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-button {
            width: 100%;
            max-width: 300px;
          }
          .team1-text40 {
            display: inline-block;
          }
          .team1-text41 {
            display: inline-block;
          }
          .team1-text42 {
            display: inline-block;
          }
          .team1-text43 {
            display: inline-block;
          }
          .team1-text44 {
            display: inline-block;
          }
          .team1-text45 {
            display: inline-block;
          }
          .team1-text46 {
            display: inline-block;
          }
          .team1-text47 {
            display: inline-block;
          }
          .team1-text48 {
            display: inline-block;
          }
          .team1-text49 {
            display: inline-block;
          }
          .team1-text50 {
            display: inline-block;
          }
          .team1-text51 {
            display: inline-block;
          }
          .team1-text52 {
            display: inline-block;
          }
          .team1-text53 {
            display: inline-block;
          }
          .team1-text54 {
            display: inline-block;
          }
          .team1-text55 {
            display: inline-block;
          }
          .team1-text56 {
            display: inline-block;
          }
          .team1-text57 {
            display: inline-block;
          }
          .team1-text58 {
            display: inline-block;
          }
          .team1-text59 {
            display: inline-block;
          }
          .team1-text60 {
            display: inline-block;
          }
          .team1-text61 {
            display: inline-block;
          }
          .team1-text62 {
            display: inline-block;
          }
          .team1-text63 {
            display: inline-block;
          }
          .team1-text64 {
            display: inline-block;
          }
          .team1-text65 {
            display: inline-block;
          }
          .team1-text66 {
            display: inline-block;
          }
          .team1-text67 {
            display: inline-block;
          }
          .team1-text68 {
            display: inline-block;
          }
          .team1-text69 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .team1-content11 {
              gap: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .team1-row1 {
              align-items: center;
              flex-direction: column;
            }
            .team1-row2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .team1-text10 {
              text-align: center;
            }
            .team1-text11 {
              text-align: center;
            }
            .team1-text12 {
              text-align: center;
            }
            .team1-container1 {
              flex-direction: column;
            }
            .team1-container2 {
              flex-direction: column;
            }
            .team1-container3 {
              flex-direction: column;
            }
            .team1-container4 {
              flex-direction: column;
            }
            .team1-text37 {
              text-align: center;
            }
            .team1-text38 {
              text-align: center;
            }
            .team1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Team1.defaultProps = {
  heading2: undefined,
  member6: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  member5: undefined,
  member6Content: undefined,
  content2: undefined,
  member5Job: undefined,
  member2Alt: 'Image of Jane Smith',
  actionContent: undefined,
  member1: undefined,
  member1Job: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1600349230078-13945eb9d51d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  member5Alt: 'Image of David Brown',
  member7: undefined,
  member4Job: undefined,
  member4: undefined,
  member8: undefined,
  member7Content: undefined,
  member7Alt: 'Image of Alex Rodriguez',
  member3Src:
    'https://images.unsplash.com/photo-1558203728-00f45181dd84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  member1Alt: 'Image of John Doe',
  member4Src:
    'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  member5Src:
    'https://images.unsplash.com/photo-1659636313439-5038ae2ba5fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  member3Content: undefined,
  member8Src:
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  member6Src:
    'https://images.unsplash.com/photo-1546938576-7d56dda5e7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  member7Job: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1728729729215-00ae703063ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  member2Job: undefined,
  member5Content: undefined,
  member2Content: undefined,
  member4Alt: 'Image of Sarah Lee',
  member8Content: undefined,
  member4Content: undefined,
  member3Job: undefined,
  content3: undefined,
  member3: undefined,
  member6Alt: 'Image of Emily Wilson',
  member3Alt: 'Image of Michael Johnson',
  member2: undefined,
  member8Job: undefined,
  heading1: undefined,
  member8Alt: 'Image of Olivia Taylor',
  member1Content: undefined,
  member6Job: undefined,
  content1: undefined,
}

Team1.propTypes = {
  heading2: PropTypes.element,
  member6: PropTypes.element,
  member2Src: PropTypes.string,
  member5: PropTypes.element,
  member6Content: PropTypes.element,
  content2: PropTypes.element,
  member5Job: PropTypes.element,
  member2Alt: PropTypes.string,
  actionContent: PropTypes.element,
  member1: PropTypes.element,
  member1Job: PropTypes.element,
  member7Src: PropTypes.string,
  member5Alt: PropTypes.string,
  member7: PropTypes.element,
  member4Job: PropTypes.element,
  member4: PropTypes.element,
  member8: PropTypes.element,
  member7Content: PropTypes.element,
  member7Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member1Alt: PropTypes.string,
  member4Src: PropTypes.string,
  member5Src: PropTypes.string,
  member3Content: PropTypes.element,
  member8Src: PropTypes.string,
  member6Src: PropTypes.string,
  member7Job: PropTypes.element,
  member1Src: PropTypes.string,
  member2Job: PropTypes.element,
  member5Content: PropTypes.element,
  member2Content: PropTypes.element,
  member4Alt: PropTypes.string,
  member8Content: PropTypes.element,
  member4Content: PropTypes.element,
  member3Job: PropTypes.element,
  content3: PropTypes.element,
  member3: PropTypes.element,
  member6Alt: PropTypes.string,
  member3Alt: PropTypes.string,
  member2: PropTypes.element,
  member8Job: PropTypes.element,
  heading1: PropTypes.element,
  member8Alt: PropTypes.string,
  member1Content: PropTypes.element,
  member6Job: PropTypes.element,
  content1: PropTypes.element,
}

export default Team1
