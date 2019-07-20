import React from 'react';

const Pets = () => (
    <div className="Pets">
            <div className="Pets-container">
                <div className="Pets-form">
                    <input type="text" id="Pet-name"/>
                    <input type="text" id="Pet-animal"/>
                    <input type="text" id="Pet-status"/>
                    <input type="text" id="Pet-owner"/>
                    <input type="submit" id="Pet-create"/>
                    <input type="submit" id="Pet-update"/>
                    <div className="Pet-delete">
                    <input type="submit" id="Pet-delete"/>
                        <div className="Pet-delete-id">
                            <input type="text" id="Pet-delete-id"/>
                            <input type="submit"/>
                        </div>
                    </div>
                    <input type="submit" id="Pet-get-id"/>
                    <div className="Pet-get-id">
                            <input type="text" id="Pet-id"/>
                            <input type="submit"/>
                            <p id="Pet-get-resp"></p>
                    </div>
                    <input type="submit"/>
                    <p id="Pet-get-all-resp"></p>
                </div>
            </div>
        </div>
);

export default Pets;